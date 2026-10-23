import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-biuxptu.css';
import '../../css/y/yi-a11b0p.css';
import '../../css/a/aj7l77bpe.css';
import '../../css/e/ebtp63szu.css';
import '../../css/a/a7yr3hbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j-biuxptu"/><circle transform="rotate(7.4 14.32 4.26)" class="yi-a11b0p"/><path class="aj7l77bpe"/><circle transform="rotate(7.4 14.32 4.26)" class="ebtp63szu"/><path class="a7yr3hbyl"/></g>`,
		"fallback": "andrsrxn:disability",
	});
}

export default Component;
