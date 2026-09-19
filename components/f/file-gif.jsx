import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/i_rbvcu_z.css';
import '../../css/v/vaulidbmy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbdrokg4F"><g class="ufeehvblu"><path class="i_rbvcu_z"/><path class="vaulidbmy"/></g></mask></defs><path mask="url(#SVGbdrokg4F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-gif",
	});
}

export default Component;
