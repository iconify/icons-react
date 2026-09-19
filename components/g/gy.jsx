import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qw8cgmb3a.css';
import '../../css/v/vg96bpbxv.css';
import '../../css/e/eic9k91kw.css';
import '../../css/j/j30xvkr6z.css';
import '../../css/a/a0a4fku7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qw8cgmb3a"/><path class="vg96bpbxv"/><path class="eic9k91kw"/><path class="j30xvkr6z"/><path class="a0a4fku7h"/></g>`,
		"fallback": "circle-flags:gy",
	});
}

export default Component;
