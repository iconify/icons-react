import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn55krb2z.css';
import '../../css/r/r-xntnbat.css';
import '../../css/d/dfjq7mbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jn55krb2z"/><rect class="r-xntnbat"/><path class="dfjq7mbpj"/>`,
		"fallback": "boxicons:align-vertical-justify-start-filled",
	});
}

export default Component;
