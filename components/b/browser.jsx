import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2b3f1bel.css';
import '../../css/c/ck24u80vm.css';
import '../../css/o/o4r4jf9kc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4VTLgKKc"><g class="ft5dv1b6b"><path class="n2b3f1bel"/><path class="ck24u80vm"/><path clip-rule="evenodd" class="o4r4jf9kc"/></g></mask></defs><path mask="url(#SVG4VTLgKKc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:browser",
	});
}

export default Component;
