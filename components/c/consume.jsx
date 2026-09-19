import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/e/ebl78obby.css';
import '../../css/u/u0zcdxb8y.css';
import '../../css/o/odgjuccph.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjOy5gcWI"><g class="ufeehvblu"><path class="ebl78obby"/><path class="u0zcdxb8y"/><path class="odgjuccph"/></g></mask></defs><path mask="url(#SVGjOy5gcWI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:consume",
	});
}

export default Component;
