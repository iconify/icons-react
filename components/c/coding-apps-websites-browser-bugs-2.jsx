import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzkf-d95a.css';
import '../../css/u/u0hgv3blk.css';
import '../../css/q/qsspeg0rg.css';
import '../../css/m/m_pngtbjb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzkf-d95a"/><path class="u0hgv3blk"/><path class="qsspeg0rg"/><path class="m_pngtbjb"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-browser-bugs-2",
	});
}

export default Component;
