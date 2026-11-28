import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gdo6oebis.css';
import '../../css/j/jq6e3qboz.css';
import '../../css/n/nb53bzx-q.css';
import '../../css/e/eik6x_g1r.css';
import '../../css/w/wkplr4b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gdo6oebis"/><path class="jq6e3qboz"/><path class="nb53bzx-q"/><path class="eik6x_g1r"/><path class="wkplr4b6q"/></g>`,
		"fallback": "iconaut:fingerprint",
	});
}

export default Component;
