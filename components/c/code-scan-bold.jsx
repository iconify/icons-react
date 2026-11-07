import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj827-b1b.css';
import '../../css/g/grci_abjh.css';
import '../../css/f/fm8m6izis.css';
import '../../css/h/h3ichbj0k.css';
import '../../css/m/mc3qlrb4j.css';
import '../../css/v/vuh948bbg.css';
import '../../css/j/jsqrbltyf.css';
import '../../css/e/e95dnts1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj827-b1b"/><path class="grci_abjh"/><path class="fm8m6izis"/><path class="h3ichbj0k"/><path class="mc3qlrb4j"/><path class="vuh948bbg"/><path class="jsqrbltyf"/><path class="e95dnts1f"/>`,
		"fallback": "solar:code-scan-bold",
	});
}

export default Component;
