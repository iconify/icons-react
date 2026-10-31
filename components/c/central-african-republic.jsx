import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scnxzqbwi.css';
import '../../css/d/d73ovybpc.css';
import '../../css/x/x1bqexlpm.css';
import '../../css/t/tbdyvbifa.css';
import '../../css/s/su6gklm_g.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scnxzqbwi"/><path class="d73ovybpc"/><path class="x1bqexlpm"/><path class="tbdyvbifa"/><path class="su6gklm_g"/>`,
		"fallback": "tabler-flags:central-african-republic",
	});
}

export default Component;
