import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh_sznb5z.css';
import '../../css/z/zz6yhdbwi.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh_sznb5z"/><path class="zz6yhdbwi"/>`,
		"fallback": "maki:drinking-water-11",
	});
}

export default Component;
