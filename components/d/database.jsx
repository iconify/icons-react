import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9gsl6b1j.css';
import '../../css/v/vb6su3tol.css';
import '../../css/k/k1xtew5eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9gsl6b1j"/><path class="vb6su3tol"/><path class="k1xtew5eb"/>`,
		"fallback": "withicons-bauhaus:database",
	});
}

export default Component;
