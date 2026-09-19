import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffby4cb3r.css';
import '../../css/m/m14k5zb3c.css';
import '../../css/o/o-vb-yaor.css';
import '../../css/m/ml0-2dt_k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffby4cb3r"/><path class="m14k5zb3c"/><path class="o-vb-yaor"/><path class="ml0-2dt_k"/>`,
		"fallback": "carbon:flood-warning",
	});
}

export default Component;
