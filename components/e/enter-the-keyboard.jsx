import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/spcy3joli.css';
import '../../css/f/fbt_i58au.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvYKyweds"><g class="ufeehvblu"><path class="spcy3joli"/><path class="fbt_i58au"/></g></mask></defs><path mask="url(#SVGvYKyweds)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:enter-the-keyboard",
	});
}

export default Component;
