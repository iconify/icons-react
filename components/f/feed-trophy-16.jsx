import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2q6z65vi.css';
import '../../css/h/hbv-qyu8a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2q6z65vi"/><path class="hbv-qyu8a"/>`,
		"fallback": "octicon:feed-trophy-16",
	});
}

export default Component;
