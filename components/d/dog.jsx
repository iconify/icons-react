import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d1_55-1qs.css';
import '../../css/w/wey5p1sfv.css';
import '../../css/i/ihlauv3xj.css';
import '../../css/i/i8ovj0b2c.css';
import '../../css/n/nghj14blp.css';
import '../../css/d/dsl3p3moq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d1_55-1qs wm-shadow"/><path class="wey5p1sfv wm-shadow"/><path class="ihlauv3xj"/><path class="i8ovj0b2c"/><path class="nghj14blp"/><path class="dsl3p3moq"/></g>`,
		"fallback": "withicons-brutal:dog",
	});
}

export default Component;
