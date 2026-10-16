import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py9jq5b2b.css';
import '../../css/s/s_r_nw-gc.css';
import '../../css/z/z1fl5lrae.css';
import '../../css/c/cgo_eslee.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py9jq5b2b"/><path class="s_r_nw-gc"/><path class="z1fl5lrae"/><path class="cgo_eslee"/>`,
		"fallback": "energy-icons:database-search-20",
	});
}

export default Component;
