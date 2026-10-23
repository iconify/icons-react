import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odvyybvbi.css';
import '../../css/b/b2gj-9bfn.css';
import '../../css/c/c_sefrbir.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odvyybvbi"/><path class="b2gj-9bfn"/><path class="c_sefrbir"/>`,
		"fallback": "octicon:git-draft-agent-16",
	});
}

export default Component;
