import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl-rncb1j.css';
import '../../css/r/r48hjqxil.css';
import '../../css/x/x-qx_cb4k.css';
import '../../css/b/b-spi4k_z.css';
import '../../css/u/uwmzjub3v.css';
import '../../css/i/iu79egzil.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl-rncb1j"/><path class="r48hjqxil"/><path class="x-qx_cb4k"/><path class="b-spi4k_z"/><path class="uwmzjub3v"/><path class="iu79egzil"/>`,
		"fallback": "devicon:homebrew-wordmark",
	});
}

export default Component;
