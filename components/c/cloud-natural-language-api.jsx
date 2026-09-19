import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkqfu6xlm.css';
import '../../css/a/aj0w9bczw.css';
import '../../css/a/a3knxfs8y.css';
import '../../css/l/lrhr33_ae.css';
import '../../css/v/vy94sotnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkqfu6xlm"/><path class="aj0w9bczw"/><path class="a3knxfs8y"/><path class="lrhr33_ae"/><path class="vy94sotnt"/>`,
		"fallback": "gcp:cloud-natural-language-api",
	});
}

export default Component;
