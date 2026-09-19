import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-piu6bto.css';
import '../../css/n/nlpt91dtk.css';
import '../../css/w/wpk5h2bgb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGekCfQbmp"><g class="ft5dv1b6b"><path class="l-piu6bto"/><path class="nlpt91dtk"/><path class="wpk5h2bgb"/></g></mask></defs><path mask="url(#SVGekCfQbmp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hospital-three",
	});
}

export default Component;
