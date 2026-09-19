import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1az-nbrd.css';
import '../../css/e/e5hgosb1a.css';
import '../../css/r/rsg6slfkl.css';
import '../../css/j/ja-v4qbal.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a1az-nbrd"/><path class="e5hgosb1a"/><path class="rsg6slfkl"/><path class="ja-v4qbal"/></g>`,
		"fallback": "glyphs:crosshairs-duo",
	});
}

export default Component;
