import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rfms6subm.css';
import '../../css/q/qa5gsllwk.css';
import '../../css/x/x8iozabdg.css';
import '../../css/s/suv371o5h.css';
import '../../css/i/i4xym8b0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path transform="matrix(.9666 0 0 .9654 .545 .551)" class="rfms6subm"/><g class="qa5gsllwk"><path transform="matrix(.28563 -.08959 .08943 .28431 8.462 8.176)" class="x8iozabdg"/><path transform="matrix(.28563 -.08959 .08943 .28431 8.462 8.176)" class="suv371o5h"/></g><path transform="scale(1.0004 1.0002)" class="i4xym8b0m"/></g>`,
		"fallback": "catppuccin:folder-xcode-open",
	});
}

export default Component;
