import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or0-msbfm.css';
import '../../css/q/qtdly1ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or0-msbfm"/><path class="qtdly1ban"/>`,
		"fallback": "withicons-bauhaus:at-sign",
	});
}

export default Component;
