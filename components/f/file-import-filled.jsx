import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/u/uth5cy.css';
import '../../css/z/zxndow.css';
import '../../css/n/nf43cj.css';
import '../../css/o/o3oo6z.css';
import '../../css/p/pj6lml.css';
import '../../css/z/zvr4mg.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/d/d-aact-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7IXnLeek"><path class="t5pxry uth5cy zxndow"/><path class="nf43cj o3oo6z t5pxry"/><path class="pj6lml t5pxry zxndow"/><path class="nf43cj zvr4mg"/></mask></defs><path mask="url(#SVG7IXnLeek)" class="botfzx"/>`,
		"fallback": "line-md:file-import-filled",
	});
}

export default Component;
