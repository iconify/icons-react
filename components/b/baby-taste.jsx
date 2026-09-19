import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qjqg17_zi.css';
import '../../css/f/f8cw1kb1c.css';
import '../../css/k/kn4yf2zml.css';
import '../../css/f/fkjiz3woz.css';
import '../../css/l/l5352421z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1dH86dZt"><g class="ufeehvblu"><path class="qjqg17_zi"/><path class="f8cw1kb1c"/><path class="kn4yf2zml"/><path class="fkjiz3woz"/><path class="l5352421z"/></g></mask></defs><path mask="url(#SVG1dH86dZt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:baby-taste",
	});
}

export default Component;
