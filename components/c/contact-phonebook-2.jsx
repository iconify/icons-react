import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzxggnccw.css';
import '../../css/y/yt9emqbru.css';
import '../../css/c/c3xxcc46t.css';
import '../../css/l/la4ay5bxr.css';
import '../../css/r/rqtpedbgt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uzxggnccw"/><path class="yt9emqbru"/><path class="c3xxcc46t"/><path class="la4ay5bxr"/><path class="rqtpedbgt"/></g>`,
		"fallback": "streamline-flex-color:contact-phonebook-2",
	});
}

export default Component;
