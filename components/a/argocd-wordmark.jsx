import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh3igdb-g.css';
import '../../css/x/xtkb3wptd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh3igdb-g"/><path class="xtkb3wptd"/>`,
		"fallback": "devicon-plain:argocd-wordmark",
	});
}

export default Component;
