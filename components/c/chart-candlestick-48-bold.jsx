import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmultrkok.css';
import '../../css/r/rvr6ihv2q.css';
import '../../css/g/gu9qoyb5a.css';
import '../../css/z/z5qwait0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmultrkok"/><path class="rvr6ihv2q"/><path class="gu9qoyb5a"/><path class="z5qwait0j"/>`,
		"fallback": "energy-icons:chart-candlestick-48-bold",
	});
}

export default Component;
