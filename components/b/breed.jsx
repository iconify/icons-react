import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq_dl8bqj.css';
import '../../css/a/asuar4emf.css';
import '../../css/f/f8sf7yhpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq_dl8bqj"/><path class="asuar4emf"/><path class="f8sf7yhpz"/>`,
		"fallback": "token:breed",
	});
}

export default Component;
