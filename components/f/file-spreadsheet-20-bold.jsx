import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq8br0b3r.css';
import '../../css/j/j_qqxg8nr.css';
import '../../css/p/ptgjsdbfb.css';
import '../../css/k/k_sb-9bog.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq8br0b3r"/><path class="j_qqxg8nr"/><path class="ptgjsdbfb"/><path class="k_sb-9bog"/>`,
		"fallback": "energy-icons:file-spreadsheet-20-bold",
	});
}

export default Component;
