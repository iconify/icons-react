import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwsh51bpk.css';
import '../../css/u/ungwd2b5z.css';
import '../../css/r/rj032db8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwsh51bpk"/><path class="ungwd2b5z"/><path class="rj032db8q"/>`,
		"fallback": "octicon:git-branch-24",
	});
}

export default Component;
