import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc7z52rjt.css';
import '../../css/v/v3vofob6e.css';
import '../../css/o/ovnqk_b4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc7z52rjt"/><path class="v3vofob6e"/><path class="ovnqk_b4p"/>`,
		"fallback": "carbon:chart-average",
	});
}

export default Component;
