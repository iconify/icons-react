import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adm1b9bzj.css';
import '../../css/u/u46oqbc7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adm1b9bzj"/><path class="u46oqbc7a"/>`,
		"fallback": "energy-icons:clipboard-list-48-bold",
	});
}

export default Component;
