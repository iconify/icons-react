import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/tvkctzm2c.css';
import '../../css/u/u0x9ani-t.css';
import '../../css/k/k8-jct44d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpgXrOcVg"><g class="ufeehvblu"><path class="tvkctzm2c"/><path class="u0x9ani-t"/><path class="k8-jct44d"/></g></mask></defs><path mask="url(#SVGpgXrOcVg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:basketball-clothes",
	});
}

export default Component;
