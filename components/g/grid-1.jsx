import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/hu98blb9x.css';
import '../../css/n/nnw9klbar.css';
import '../../css/i/i2cyzso1p.css';
import '../../css/g/g0zg1fb3v.css';
import '../../css/i/i9i-98bne.css';
import '../../css/w/wu7ugqaks.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="hu98blb9x"/><rect class="nnw9klbar"/><rect class="i2cyzso1p"/><rect class="g0zg1fb3v"/><rect class="i9i-98bne"/><rect class="wu7ugqaks"/></g>`,
		"fallback": "glyphs-poly:grid-1",
	});
}

export default Component;
