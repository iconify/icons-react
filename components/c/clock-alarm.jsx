import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/grhwxq4gj.css';
import '../../css/c/cij3g2hio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="grhwxq4gj"/><circle class="cij3g2hio"/></g>`,
		"fallback": "charm:clock-alarm",
	});
}

export default Component;
