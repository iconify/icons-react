import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/inewx5b5l.css';
import '../../css/q/qrswr37-c.css';
import '../../css/a/apsjv3qau.css';
import '../../css/w/w6g5yhqkl.css';
import '../../css/f/ftoxqwbpl.css';
import '../../css/a/adfwhub6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="inewx5b5l"/><circle class="qrswr37-c"/><circle class="apsjv3qau"/><circle class="w6g5yhqkl"/><circle class="ftoxqwbpl"/><circle class="adfwhub6c"/></g>`,
		"fallback": "lucide:grip-vertical",
	});
}

export default Component;
