import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwg56qbut.css';
import '../../css/t/tcv0pgcak.css';
import '../../css/u/ungwd2b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwg56qbut"/><path class="tcv0pgcak"/><path class="ungwd2b5z"/>`,
		"fallback": "octicon:git-merge-24",
	});
}

export default Component;
