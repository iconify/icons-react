import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cmtk6db6i.css';
import '../../css/v/vpakukbgd.css';
import '../../css/z/zrsocu2vi.css';
import '../../css/u/uk8tuqbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cmtk6db6i"/><path class="vpakukbgd"/><path class="zrsocu2vi"/><path class="uk8tuqbzp"/></g>`,
		"fallback": "tabler:brand-loom",
	});
}

export default Component;
