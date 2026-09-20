import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obl14qb3f.css';
import '../../css/x/xz9r6ubpj.css';
import '../../css/c/c5cfbqbfc.css';
import '../../css/s/st-tcinvp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obl14qb3f"/><path class="xz9r6ubpj"/><path class="c5cfbqbfc"/><path class="st-tcinvp"/>`,
		"fallback": "selfhst:ashim-light",
	});
}

export default Component;
