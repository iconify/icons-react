import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c6qt82bof.css';
import '../../css/k/k7lu6pbtg.css';
import '../../css/s/s3lm7_wkp.css';
import '../../css/z/zgmpn70rp.css';
import '../../css/a/a8bxz5bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c6qt82bof wm-shadow"/><path class="k7lu6pbtg wm-shadow"/><path class="s3lm7_wkp"/><path class="zgmpn70rp"/><path class="a8bxz5bjy"/></g>`,
		"fallback": "withicons-brutal:cpu",
	});
}

export default Component;
