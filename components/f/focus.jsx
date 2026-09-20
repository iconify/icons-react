import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jgl72-pgt.css';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w5ceo1k1j.css';
import '../../css/s/sw8bwnbda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGbyN7QdEZ" class="n1mjunbsu"><path class="jgl72-pgt"/></mask><g class="flen3tbdj"><path class="w5ceo1k1j"/><path mask="url(#SVGbyN7QdEZ)" class="sw8bwnbda"/></g>`,
		"fallback": "quill:focus",
	});
}

export default Component;
