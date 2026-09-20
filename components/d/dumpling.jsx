import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf1wvbbac.css';
import '../../css/a/apfxgpb2j.css';
import '../../css/b/bbpzg73-s.css';
import '../../css/j/jpxo32bob.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf1wvbbac"/><path class="apfxgpb2j"/><path paint-order="stroke fill markers" transform="matrix(.6322 .7748 -.7436 .6686 0 0)" class="bbpzg73-s"/><path class="jpxo32bob"/>`,
		"fallback": "openmoji:dumpling",
	});
}

export default Component;
