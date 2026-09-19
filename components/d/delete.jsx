import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bwa2n48gf.css';
import '../../css/o/o9_nn-bfe.css';
import '../../css/v/vvqazr9us.css';
import '../../css/f/fv2e8-bhf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0d9VOcXn"><g class="ufeehvblu"><path class="bwa2n48gf"/><path class="o9_nn-bfe"/><path class="vvqazr9us"/><path class="fv2e8-bhf"/></g></mask></defs><path mask="url(#SVG0d9VOcXn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:delete",
	});
}

export default Component;
