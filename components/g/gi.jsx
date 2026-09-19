import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fkdjlyb2h.css';
import '../../css/l/loxo0lg5u.css';
import '../../css/b/b2iqgbb7z.css';
import '../../css/w/wwdrpthay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fkdjlyb2h"/><path class="loxo0lg5u"/><path class="b2iqgbb7z"/><path class="wwdrpthay"/></g>`,
		"fallback": "circle-flags:gi",
	});
}

export default Component;
