import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb6dvfbbn.css';
import '../../css/a/ajl3hnenw.css';
import '../../css/k/k6canw58a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb6dvfbbn"/><path class="ajl3hnenw"/><path class="k6canw58a"/>`,
		"fallback": "energy-icons:git-branch-48",
	});
}

export default Component;
