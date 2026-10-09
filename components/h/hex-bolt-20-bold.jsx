import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xerqgrbub.css';
import '../../css/a/audsyabir.css';
import '../../css/v/v6pfx7zrg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xerqgrbub"/><path class="audsyabir"/><path class="v6pfx7zrg"/>`,
		"fallback": "energy-icons:hex-bolt-20-bold",
	});
}

export default Component;
