import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/slb9bgbjc.css';
import '../../css/d/d3vk4h6tm.css';
import '../../css/n/nk3yzmb_b.css';
import '../../css/h/h12ov-btj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiclGCbnp"><g class="ufeehvblu"><path class="slb9bgbjc"/><path class="d3vk4h6tm"/><path class="nk3yzmb_b"/><path class="h12ov-btj"/></g></mask></defs><path mask="url(#SVGiclGCbnp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:game-handle",
	});
}

export default Component;
