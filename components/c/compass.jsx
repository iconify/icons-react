import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b93j9cbjr.css';
import '../../css/r/r389qlbwq.css';
import '../../css/i/iirdoip_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b93j9cbjr"/><path class="r389qlbwq"/><circle class="iirdoip_j"/>`,
		"fallback": "carbon:compass",
	});
}

export default Component;
