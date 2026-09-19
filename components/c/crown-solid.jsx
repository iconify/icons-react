import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc481ebrr.css';
import '../../css/c/c9yx--bxi.css';
import '../../css/l/lkcqbab8v.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc481ebrr"/><circle class="c9yx--bxi"/><path class="lkcqbab8v"/>`,
		"fallback": "clarity:crown-solid",
	});
}

export default Component;
