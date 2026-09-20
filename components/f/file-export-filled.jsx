import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/u/uth5cy.css';
import '../../css/z/zxndow.css';
import '../../css/n/nf43cj.css';
import '../../css/o/o3oo6z.css';
import '../../css/p/pj6lml.css';
import '../../css/d/dauics.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/d/d-2fyhzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwvXXqDTl"><path class="t5pxry uth5cy zxndow"/><path class="nf43cj o3oo6z t5pxry"/><path class="pj6lml t5pxry zxndow"/><path class="dauics nf43cj"/></mask></defs><path mask="url(#SVGwvXXqDTl)" class="botfzx"/>`,
		"fallback": "line-md:file-export-filled",
	});
}

export default Component;
