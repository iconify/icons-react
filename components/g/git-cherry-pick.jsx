import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c-m63qg-e.css';
import '../../css/p/pe7zzcn4c.css';
import '../../css/e/e6b6ro_mc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="c-m63qg-e"/><path class="pe7zzcn4c"/><path class="e6b6ro_mc"/></g>`,
		"fallback": "charm:git-cherry-pick",
	});
}

export default Component;
